# 🎥 Quick Start: Adding Your First Sermon Video

## Super Simple 3-Step Process

### Step 1: Upload to YouTube (5 minutes)

1. Go to **[youtube.com](https://youtube.com)**
2. Click the **camera icon (+)** at top right
3. Click **"Upload video"**
4. Drag your video file or click to browse
5. While uploading, fill in:
   - **Title**: "The Power of Faith - Apostle Oyiagaba Peter Obida"
   - **Description**: "Sunday Service - September 1, 2026"
6. Click **"Publish"**
7. **Copy the Video ID** from the URL:
   ```
   https://www.youtube.com/watch?v=ABC123xyz
                                   ^^^^^^^^^^
                                   This is your Video ID
   ```

### Step 2: Add Video ID to Website (2 minutes)

1. Open this file in your code editor:
   ```
   app/sermons/page.tsx
   ```

2. Find this section (around line 12):
   ```typescript
   const sermons = [
     {
       title: "The Power of Faith",
       speaker: "Apostle Oyiagaba Peter Obida",
       date: "August 2026",
       category: "Sunday Service",
       description: "A powerful message on walking by faith...",
       videoId: "", // ← PUT YOUR VIDEO ID HERE
     },
   ```

3. Paste your Video ID between the quotes:
   ```typescript
   videoId: "ABC123xyz",
   ```

4. **Save the file** (Ctrl+S or Cmd+S)

### Step 3: View on Website (1 minute)

1. Go to your website: **http://localhost:3000/sermons**
2. **Refresh** the page (Ctrl+R or Cmd+R)
3. **🎉 Done!** Your video now plays directly on the website!

## Example: Complete Sermon Entry

```typescript
{
  title: "The Power of Faith",
  speaker: "Apostle Oyiagaba Peter Obida",
  date: "September 1, 2026",
  category: "Sunday Service",
  description: "A powerful message on walking by faith and trusting God's promises.",
  videoId: "dQw4w9WgXcQ", // Your YouTube video ID
},
```

## Adding Multiple Sermons

Just copy and paste, then change the details:

```typescript
const sermons = [
  {
    title: "First Sermon",
    speaker: "Apostle Oyiagaba Peter Obida",
    date: "September 1, 2026",
    category: "Sunday Service",
    description: "First sermon description",
    videoId: "VIDEO_ID_1",
  },
  {
    title: "Second Sermon",
    speaker: "Apostle Oyiagaba Peter Obida",
    date: "August 25, 2026",
    category: "Bible Study",
    description: "Second sermon description",
    videoId: "VIDEO_ID_2",
  },
  {
    title: "Third Sermon",
    speaker: "Apostle Oyiagaba Peter Obida",
    date: "August 18, 2026",
    category: "Sunday Service",
    description: "Third sermon description",
    videoId: "VIDEO_ID_3",
  },
];
```

## Categories You Can Use

- `"Sunday Service"`
- `"Bible Study"`
- `"Prayer Meeting"`
- `"Special Events"`

The category badge color matches your church colors!

## What Visitors Will See

✅ **YouTube video player** embedded directly on your site  
✅ **Play button** - Click to watch  
✅ **Full screen option**  
✅ **Volume control**  
✅ **HD quality** (if uploaded in HD)  
✅ **Mobile-friendly** playback  
✅ **Fast loading** from YouTube's servers  

## Tips

### Best Video Format:
- **Resolution**: 1080p (1920x1080) or 720p (1280x720)
- **Format**: MP4 or MOV
- **File Size**: Any size (YouTube handles it)

### YouTube Privacy Settings:
- **Public**: Anyone can find it on YouTube and your website ✅ Recommended
- **Unlisted**: Only people with the link can watch (still works on your site)
- **Private**: ❌ Won't work on your website

### Organizing Your Sermons:
Create a **YouTube Playlist**:
1. On YouTube, go to your channel
2. Click "Playlists" → "New Playlist"
3. Name it: "2026 Sunday Services"
4. Add your sermons to the playlist
5. Keep everything organized!

## Troubleshooting

**Video not showing?**
- Check that videoId is correct (11 characters, no spaces)
- Make sure video is Public or Unlisted (not Private)
- Refresh browser with Ctrl+Shift+R

**Video says "Video unavailable"?**
- Video might still be processing (wait a few minutes)
- Check YouTube privacy settings
- Make sure you copied the correct Video ID

## Next Steps

After adding your first video:
1. Add more sermons (repeat the process)
2. Organize them by date (newest first)
3. Use descriptive titles
4. Add Bible verses to descriptions
5. Share individual sermon links with members!

---

**That's it! Simple as 1-2-3!** 🎉

