/* eslint-disable react/prop-types */


const Button = ({children}) => {
  return (
    <button className="bg-gradient-to-r md:whitespace-nowrap hover:scale-105 transition-transform  from-secondary px-3 py-2 rounded-lg text-white shadow font-semibold via-light_accent to-primary">
      {children}
    </button>
  )
}

export default Button