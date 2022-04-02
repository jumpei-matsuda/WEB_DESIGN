import { Box, CardMedia, Grid } from '@mui/material';
import Title from 'components/Title';
import WrapperBox from 'components/WrapperBox';
import ProfilePhoto from 'assets/images/profile.jpg'

const About: React.FC = () => (
  <Box id="About">
    <WrapperBox>
      <Title title="About" />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            src={ProfilePhoto}
          />
        </Grid>
        <Grid item xs={6} />
      </Grid>
    </WrapperBox>
  </Box>
)

export default About;