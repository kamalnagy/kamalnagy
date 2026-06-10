The screenshot is not a Google Drive sharing-permission problem. It is a browser/embed restriction: `drive.google.com` is refusing to connect inside the current preview/frame context, which can happen even when the folder is public.

Plan:
1. Keep the existing public sharing URL format for the folder.
2. Update the portfolio document links so Google Drive opens as a true top-level external page, not inside the Lovable preview frame.
3. Add `aria-label` text that matches the actual destination, so the folder link is not described as a single PDF.
4. Verify the links use `target="_blank"` and safe external-link attributes.

Technical detail:
- The current code already uses `target="_blank"`, but the preview environment can still show blocked Drive content depending on how the click is handled or previewed.
- The production/published site should open the link in a new browser tab. If Google still blocks it there, the workaround is to use a direct Google Drive file link instead of a folder link, or upload the PDF into the app/assets instead of relying on Drive.