import React, { useState, useEffect } from 'react'

export default function Categories({ limit, layout, shouldRender }) {
  const Category = shouldRender
  const Layout = layout.component
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch('https://thishelpedme-today.firebaseio.com/categories.json')
      .then(data => data.json())
      .then(categories => {
        setCategories(Object.values(categories))
      })
  }, [])
  console.log(layout.props)
  return (
    <React.Fragment>
      <Layout {...layout.props} >
        {
          categories.map((category, key) => (
              <Category key={key} category={category} />
            )
          )
        }
      </Layout>
    </React.Fragment>
  )
}