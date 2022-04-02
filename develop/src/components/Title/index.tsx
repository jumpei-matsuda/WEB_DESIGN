import { Box, Typography } from '@mui/material';

type TitleProps = {
  title: string,
  justifyContent?: "start" | "center" | "end"
}
const Title: React.FC<TitleProps> = ({ title, justifyContent = "center" }) => (
  <Box display="flex" justifyContent={justifyContent}>
    <Typography sx={{
      fontSize: "3rem",
      fontFamily: "Times New Roman",
      padding: "0 .5rem",
      color: "#633E00",
    }}>
      {title}
    </Typography>
  </Box>
)

export default Title;