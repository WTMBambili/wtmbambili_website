/* eslint-disable react/prop-types */


const Button = ({children}) => {
  return (
    <button className="bg-gradient-to-r hover:scale-105 transition-transform  from-secondary px-4 py-2 rounded-lg text-white shadow font-semibold via-light_accent to-primary">
      {children}
    </button>
  )
}

export default Button