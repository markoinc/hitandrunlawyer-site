#!/bin/bash
DOMAIN="https://hitandrunlawyer.net"
OUTPUT="public/sitemap.xml"

echo '<?xml version="1.0" encoding="UTF-8"?>' > $OUTPUT
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' >> $OUTPUT

# Add homepage
echo "<url><loc>${DOMAIN}/</loc><priority>1.0</priority></url>" >> $OUTPUT

# Find all .astro pages and generate URLs
for file in $(find src/pages -name "*.astro" | grep -v '\[' | sort); do
    # Convert path to URL
    url=$(echo $file | sed 's|src/pages||' | sed 's|\.astro$||' | sed 's|/index$||')
    if [ -z "$url" ]; then continue; fi
    if [ "$url" = "/" ]; then continue; fi
    echo "<url><loc>${DOMAIN}${url}/</loc></url>" >> $OUTPUT
done

# Add state pages
for state in alabama alaska arizona arkansas california colorado connecticut delaware district-of-columbia florida georgia hawaii idaho illinois indiana iowa kansas kentucky louisiana maine maryland massachusetts michigan minnesota mississippi missouri montana nebraska nevada new-hampshire new-jersey new-mexico new-york north-carolina north-dakota ohio oklahoma oregon pennsylvania rhode-island south-carolina south-dakota tennessee texas utah vermont virginia washington west-virginia wisconsin wyoming; do
    echo "<url><loc>${DOMAIN}/states/${state}/</loc></url>" >> $OUTPUT
done

# Add city pages from the data file
grep "slug:" src/data/cities.ts | sed 's/.*slug: "//' | sed 's/",$//' | while read slug; do
    echo "<url><loc>${DOMAIN}/cities/${slug}/</loc></url>" >> $OUTPUT
done

echo '</urlset>' >> $OUTPUT
echo "Sitemap generated with $(grep -c '<url>' $OUTPUT) URLs"
# Also add blog posts
grep "slug:" src/data/articles.ts 2>/dev/null | sed 's/.*slug: "//' | sed 's/",$//' | while read slug; do
    echo "<url><loc>${DOMAIN}/blog/${slug}/</loc></url>" >> $OUTPUT
done

# Add resources
grep "slug:" src/data/resources.ts 2>/dev/null | sed 's/.*slug: "//' | sed 's/",$//' | while read slug; do
    echo "<url><loc>${DOMAIN}/resources/${slug}/</loc></url>" >> $OUTPUT
done

# Add case types  
grep "slug:" src/data/case-types.ts 2>/dev/null | sed 's/.*slug: "//' | sed 's/",$//' | while read slug; do
    echo "<url><loc>${DOMAIN}/case-types/${slug}/</loc></url>" >> $OUTPUT
done
