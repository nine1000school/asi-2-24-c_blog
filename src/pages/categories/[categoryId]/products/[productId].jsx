import { useRouter } from "next/router.js"

const ProductPage = () => {
  const router = useRouter()

  return (
    <h1>
      Category #{router.query.categoryId} -- Product #{router.query.productId}
    </h1>
  )
}

export default ProductPage
