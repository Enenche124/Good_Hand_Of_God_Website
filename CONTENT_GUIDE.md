# Content Management Guide

This guide will help you add and manage content on your church website.

## 📹 Adding Sermon Videos

### Option 1: Upload to YouTube (Recommended)

1. Upload your sermon videos to YouTube
2. Go to `app/sermons/page.tsx`
3. Update the sermons array with YouTube embed links:

```typescript
const sermons = [
  {
    title: "Your Sermon Title",
    speaker: "Apostle Oyiagaba Peter Obida",
    date: "September 2026",
    category: "Sunday Service",
    description: "Description of the sermon...",
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  },
  // Add more sermons...
];
```

4. Update the video thumbnail section to show the actual video:

```typescript
<iframe
  src={sermon.videoUrl}
  className="w-full h-48"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

### Option 2: Local Video Files

1. Place video files in `public/videos/`
2. Reference them in the sermons array:

```typescript
videoUrl: "/videos/sermon-title.mp4"
```

## 🖼️ Adding Images

### Church Logo

1. Add your logo to `public/images/logo.png`
2. Update `app/components/Header.tsx`:

```typescript
<Image 
  src="/images/logo.png" 
  alt="Church Logo" 
  width={48} 
  height={48}
/>
```

### Background Images

1. Add images to `public/images/`
2. Use in CSS or as background:

```typescript
style={{ backgroundImage: 'url(/images/your-image.jpg)' }}
```

## 🗺️ Adding Google Maps

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for: "Ever Great International Schools, Opposite Loyola Jesuit College, Gidan Mangoro, Abuja"
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the placeholder in `app/contact/page.tsx`:

```typescript
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
```

## 💰 Adding Bank Details

Update `app/give/page.tsx` with your actual bank information:

```typescript
<p className="text-gray-700 mb-2">
  <span className="font-semibold">Bank Name:</span> First Bank of Nigeria
</p>
<p className="text-gray-700 mb-2">
  <span className="font-semibold">Account Name:</span> 
  The Good Hand of God International Gospel Ministry Centre
</p>
<p className="text-gray-700">
  <span className="font-semibold">Account Number:</span> 1234567890
</p>
```

## 📧 Setting Up Contact Form Email

### Using Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Install Resend:
   ```bash
   npm install resend
   ```

3. Create `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  
  try {
    const data = await resend.emails.send({
      from: 'website@yourdomain.com',
      to: 'oyiagabapeter1994@gmail.com',
      subject: `Contact Form: ${body.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Subject:</strong> ${body.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
```

4. Add `.env.local`:
   ```
   RESEND_API_KEY=your_api_key_here
   ```

5. Update the form submission in `app/contact/page.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("error");
    }
  } catch (error) {
    setStatus("error");
  }
};
```

## 📅 Updating Events

Edit `app/events/page.tsx` to add new events:

```typescript
const upcomingEvents = [
  {
    title: "Your Event Title",
    date: "Date",
    time: "Time",
    description: "Event description...",
    category: "Weekly" or "Monthly" or "Special",
    color: "bg-primary-red" or "bg-primary-blue" or other Tailwind color,
  },
  // Add more events...
];
```

## ✏️ Updating Text Content

All text content is in the respective page files:

- Homepage: `app/page.tsx`
- About: `app/about/page.tsx`
- Ministries: `app/ministries/page.tsx`
- Events: `app/events/page.tsx`
- Sermons: `app/sermons/page.tsx`
- Contact: `app/contact/page.tsx`
- Give: `app/give/page.tsx`

Simply open the file and edit the text between the tags.

## 🎨 Changing Colors

To change the color scheme, edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    red: "#DC2626",    // Change to your preferred red
    blue: "#2563EB",   // Change to your preferred blue
    white: "#FFFFFF",
  },
},
```

## 📱 Testing

After making changes:

1. Save your files
2. Check [http://localhost:3000](http://localhost:3000)
3. Test on mobile by resizing your browser
4. Use browser dev tools to test responsive design

## 🚀 Deploying Updates

After making changes:

```bash
git add .
git commit -m "Update content"
git push
```

Your hosting service (Vercel, Netlify, etc.) will automatically redeploy.

## ❓ Need Help?

If you need assistance with any of these updates, contact your web developer or refer to the Next.js documentation at [nextjs.org](https://nextjs.org).
