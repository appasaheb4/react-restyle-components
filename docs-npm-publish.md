## 🚀 Quick Win: Test Before Publishing

### Modify npm-publish.md

Run this command to see what will be included in your package:
'''
npm pack --dry-run
'''
Or to see actual unpacked size:
'''
npm pack
tar -ztvf react-restyle-components-\_.tgz | awk '{sum+=$3} END {print sum/1024/1024 " MB"}'
'''
