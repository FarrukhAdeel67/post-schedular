"use client"

interface ButtonProps {
  label: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        rounded-md
        hover:opacity-80
        transition
        bg-blackDark
        border-grayDark
        text-white
        py-3
        px-8
        hover:underline
        font-semibold
        border
      "
    >
      {label}
    </button>
  )
}

export default Button
