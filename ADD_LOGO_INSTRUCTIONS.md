# Adding the AI Valley Logo

## Instructions

1. **Save the AI Valley logo image** to the `public` folder with the filename `ai-valley-logo.png`

2. The logo should be:
   - PNG format with transparent background (preferred)
   - At least 200x200 pixels for good quality
   - The cute astronaut/robot character in blue as shown in your image

3. Once you've added the file, the website will automatically display:
   - The logo in the navbar (40x40px)
   - The logo in the Hosts section (80x80px)

## File Location
Place the image file here:
```
ai-valley-fintech/
  public/
    ai-valley-logo.png  <-- Add your logo here
```

## Alternative: Using a Different Filename
If you want to use a different filename (e.g., `ai-valley-mascot.png`), update these files:
- `components/sections/Hosts.tsx` - Line 16
- `components/shared/Navbar.tsx` - Line 56

The website is already configured to display the logo once you add the image file!
