# Compress with ffmpeg (example: compress to reasonable web size)
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 output.mp4


ffmpeg -i app_use_big.mp4 -vcodec libx264 -crf 28 app_use.mp4