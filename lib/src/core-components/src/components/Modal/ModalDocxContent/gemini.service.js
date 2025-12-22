const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';
// Fallback models - will try each one in order if previous fails
const GEMINI_MODELS = [
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-1.5-flash',
];
// Call API with specific model using fetch
const callWithModel = async (prompt, model, gemini_key) => {
    const url = `${GEMINI_BASE_URL}/${model}:generateContent`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30 * 1000); // 30 seconds
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'x-goog-api-key': gemini_key,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt,
                            },
                        ],
                    },
                ],
            }),
            signal: controller.signal,
        });
        clearTimeout(timeoutId);
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData?.error?.message || `HTTP ${response.status}`);
        }
        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        return text ? { text } : null;
    }
    catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
};
export const geminiSendMessageService = async (prompt, gemini_key) => {
    let lastError = null;
    // Try each model in order
    for (const model of GEMINI_MODELS) {
        try {
            console.log(`[Gemini] Trying model: ${model}`);
            const result = await callWithModel(prompt, model, gemini_key);
            if (result) {
                console.log(`[Gemini] Success with model: ${model}`);
                return result;
            }
        }
        catch (error) {
            console.warn(`[Gemini] Model ${model} failed:`, error instanceof Error ? error.message : error);
            lastError = error instanceof Error ? error : new Error(String(error));
            // Continue to next model
        }
    }
    // All models failed - show error
    console.error('[Gemini] All models failed:', lastError);
    const errorMessage = lastError?.message || 'Failed to get AI response';
    console.error(`😔 AI Error: ${errorMessage}`);
    return null;
};
