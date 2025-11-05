# samkaj's website

## blog

1. write blog post in md (`blog/<post.md>`)
2. compile
    - assertions:
        - markdown yaml header exists with:
           - title 
           - description 
           - date
    - preview (append to `src/blog/index.html`)
    - actual blog post (generate `src/blog/<post>.html`)

todo:
- implement surrounding html for:
    - blog overview
    - blog post
        - css for compiled markdown
        - sidebar toc
