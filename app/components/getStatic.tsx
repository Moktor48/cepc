

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } }
        ],
        fallback: true
    };
}

export async function getStaticProps({ params }) {

    console.log(params)

    const res = await fetch(`   `) <= My URL
    const post = await res.json()

    return { props: { post } }
}

export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())
   
    return posts.map((post) => ({
      slug: post.slug,
    }))
  }

  // One built for PERSON page, one for COALITION page. 
  // These pages should pull ALL DB entries for the page
  // Learn how to JOIN your queries and combine all the info on to each page.