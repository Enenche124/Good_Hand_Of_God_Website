# How to Add Sermon Videos to Your Website

## Quick Guide: YouTube Method (Recommended)

### Step 1: Upload to YouTube

1. Go to [YouTube.com](https://youtube.com) and sign in
2. Click **+ Create** → **Upload video**
3. Upload your sermon video file
4. Fill in details:
   - **Title**: "The Power of Faith - Sunday Service"
   - **Description**: Brief summary of the sermon
   - **Visibility**: Choose "Public" (everyone can see) or "Unlisted" (only people with link)
5. Click **Publish**
6. After upload, copy the video URL, for example:
   ```
   https://www.youtube.com/watch?v=dQw4w9WgXcQ
   ```
   The part after `v=` is your **Video ID**: `dQw4w9WgXcQ`

### Step 2: Add Video to Your Website

1. **Open the sermons page file**:
   - Location: `app/sermons/page.tsx`

2. **Find the sermons array** (around line 8):
   ```typescript
   const sermons = [
     {
       title: "The Power of Faith",
       speaker: "Apostle Oyiagaba Peter Obida",
       date: "August 2026",
       category: "Sunday Service",
       description: "A powerful message on walking by faith...",
       thumbnail: "🎥",
     },
     // Add more sermons here
   ];
   ```

3. **Add your video ID**:
   ```typescript
   const sermons = [
     {
       title: "The Power of Faith",
       speaker: "Apostle Oyiagaba Peter Obida",
       date: "September 2, 2026",
       category: "Sunday Service",
       description: "A powerful message on walking by faith and not by sight.",
       videoId: "dQw4w9WgXcQ", // ← ADD THIS LINE with your YouTube video ID
     },
     // Add more sermons...
   ];
   ```

4. **Add another sermon** (copy and paste):
   ```typescript
   const sermons = [
     {
       title: "The Power of Faith",
       speaker: "Apostle Oyiagaba Peter Obida",
       date: "September 2, 2026",
       category: "Sunday Service",
       description: "A powerful message on walking by faith.",
       videoId: "dQw4w9WgXcQ",
     },
     {
       title: "Walking in Divine Purpose", // ← New sermon
       speaker: "Apostle Oyiagaba Peter Obida",
       date: "August 25, 2026",
       category: "Sunday Service",
       description: "Discovering your God-given purpose.",
       videoId: "ANOTHER_VIDEO_ID", // ← Your second video ID
     },
   ];
   ```

5. **Save the file** (Ctrl+S)
6. **Refresh your browser** - the videos will appear!

### Step 3: Update the Display Code (One-Time Setup)

I'll update the code now to actually show the YouTube videos instead of placeholders.

## Alternative Methods

### Method 2: Vimeo (Professional Option)
- Similar to YouTube but more professional look
- Better privacy controls
- No ads on videos
- Cost: Free for limited videos, paid plans for more

### Method 3: Local Video Files (Not Recommended)
- Upload videos to `public/videos/` folder
- Works offline but:
  - ❌ Large file sizes slow down your site
  - ❌ Expensive bandwidth costs
  - ❌ Slower loading for viewers
  - ❌ Hard to manage many videos

### Method 4: Cloud Storage (Advanced)
- Services like Cloudinary, AWS S3
- More technical setup required
- Good for large organizations

## Tips for Video Management

### Creating a Playlist on YouTube:
1. Go to your YouTube channel
2. Click **Playlists** → **New Playlist**
3. Name it: "Sunday Services 2026"
4. Add your sermons to the playlist
5. Embed entire playlist on your site

### Video Best Practices:
- **Title Format**: "[Sermon Title] - [Speaker Name] - [Date]"
- **Thumbnail**: Use a custom image with sermon title
- **Description**: Include Bible verses referenced
- **Tags**: Add relevant keywords (faith, gospel, christian, church)
- **Captions**: YouTube auto-generates them for accessibility

## Quick Reference

**To add a sermon:**
1. Upload to YouTube
2. Copy video ID from URL
3. Open `app/sermons/page.tsx`
4. Add new entry to sermons array with videoId
5. Save and refresh

**Categories you can use:**
- "Sunday Service"
- "Bible Study"
- "Prayer Meeting"
- "Special Events"

## Need Help?

If you get stuck:
1. Check that video ID is correct (11 characters from YouTube URL)
2. Make sure video is Public or Unlisted (not Private)
3. Refresh browser with Ctrl+Shift+R
4. Check browser console for errors (F12 → Console)

---

**Next Step**: Let me update the code to display YouTube videos properly!
