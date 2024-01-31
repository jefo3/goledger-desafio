interface IProps {
  size?: number
  color?: string
}

export const ExplicitIcon = ({ size = 24 }: IProps) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4h-4v-2h4v-2h-4V9h4V7H9v10h6z"
          width={size}
          height={size}
        />
      </svg>
    </svg>
  )
}
