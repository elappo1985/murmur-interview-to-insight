<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- The launch page lives entirely in `src/routes/index.tsx`; the waitlist form only shows a confirmation and does not store emails yet — add Lovable Cloud before promising saved signups.
- All colors, fonts and button styles come from tokens and `@utility` classes in `src/styles.css`; keep components free of raw color values so the look stays consistent.
