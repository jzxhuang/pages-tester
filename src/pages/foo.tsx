import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(
    "🐛 XXX ~ constgetServerSideProps:GetServerSideProps= ~ context:",
    context.req,
    context.req.headers["x-forwarded-for"]
  )
  // Add your server-side logic here
  // ...
  const resp = await fetch("https://api-tester-five.vercel.app/api/hello")
  // console.log("🐛 XXX ~ constgetServerSideProps:GetServerSideProps= ~ resp:", resp)

  return {
    props: {
      // Add the data you want to pass to the component
      // ...
    },
  }
}

const FooPage = () => {
  return <div>Hello world</div>
}

export default FooPage
