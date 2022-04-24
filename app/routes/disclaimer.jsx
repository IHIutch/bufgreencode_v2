import { json } from 'remix'
import SidebarLayout from '~/layouts/SidebarLayout'
import { getArticles } from '~/models/articles.server'

export async function loader() {
  return json({
    articles: await getArticles(),
  })
}

export default function Disclaimer() {
  return (
    <SidebarLayout>
      <h1 className="text-4xl mb-6 font-medium">Disclaimer</h1>
      <div className="prose">
        <p className="lead">
          This site is an unofficial site for the Buffalo Green Code. This is a
          an open source project and is not affiliated with the City of Buffalo.
        </p>
        <p>
          The official documentation can be found on the{' '}
          <a
            href="https://www.buffalony.gov/1224/Using-the-Unified-Development-Ordinance"
            target="_blank"
            rel="noreferrer"
          >
            City of Buffalo 's website.
          </a>
        </p>
        <p>
          We've done our best to make this site as accurate as possible, in
          order to make it easier to search and find important information. Any
          information that is not accurate or up to date is not intentional.
        </p>
        <p>
          If you find any errors or inaccuracies,{' '}
          <a
            href="https://forms.reform.app/szenkB/buffalo-green-code/sxml6n"
            target="_blank"
            rel="noreferrer"
          >
            please let us know
          </a>
          .
        </p>
      </div>
    </SidebarLayout>
  )
}
