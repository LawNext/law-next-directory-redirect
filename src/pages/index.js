import * as React from "react"

const IndexPage = () => {
  return (
    <main>
      <h1>
        Redirecting to <a href="https://directory.lawnext.com">directory.lawnext.com</a>
      </h1>
    </main>
  )
}

export default IndexPage

export const Head = () => {
  <meta http-equiv="refresh" content="0; URL='https://directory.lawnext.com'" />
}
