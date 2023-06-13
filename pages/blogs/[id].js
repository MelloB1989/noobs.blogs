import Layout from '../../layout/default_layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/blogs';


export default function Blog({ blogData }){
    return(
        <>
        <Layout>
        <Head>
        <title>{blogData?.title} | Noobs Learning</title>
      </Head>
        <div className="section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="mb-5">
          <h2 className="mb-4" style={{ lineHeight: "1.5" }}>
            {blogData?.title}
          </h2>
          <span>
            {blogData?.date} <span className="mx-2">/</span>{" "}
          </span>
          <p className="list-inline-item">
            Category :{" "}
            <a href="#!" className="ml-1">
              {blogData?.category}{" "}
            </a>
          </p>
          <p className="list-inline-item">
            Tags :{" "}
            <a href="#!" className="ml-1">
              {blogData?.tags}{" "}
            </a>{" "}
          </p>
        </div>
        <div className="mb-5 text-center">
          <div className="post-slider rounded overflow-hidden">
            <img
              loading="lazy"
              decoding="async"
              src={blogData?.image_url}
              alt="Post Thumbnail"
            />
          </div>
        </div>
        <div className="content">
                  <div dangerouslySetInnerHTML={{ __html: blogData?.contentHtml }} />
        </div>
      </div>
    </div>
  </div>
</div>
        </Layout>
        </>
        )
}


export async function getStaticPaths() {
const paths = getAllPostIds()
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const blogData = await getPostData(params.id)
  console.log(params.id)
  return {
    props: {
      blogData
    }
  }
}
