import { Box, CardMedia, Typography } from '@mui/material';
import TopImage from 'assets/images/top.jpg'

import WrapperBox from 'components/WrapperBox';

const TopPage: React.FC = () => (
  <Box id="Top">
    <WrapperBox>
      <Box position="relative">
        <Typography sx={{
          position: "absolute",
          fontSize: "3rem",
          fontFamily: "Times New Roman",
          padding: "0 .5rem",
          color: "#633E00",
          right: 0,
          bottom: 0,
        }}>
          Jumpei Matsuda
        </Typography>
        <CardMedia
          component="img"
          src={TopImage}
          sizes="100%"
        />
      </Box>
    </WrapperBox>
  </Box>
)

export default TopPage;