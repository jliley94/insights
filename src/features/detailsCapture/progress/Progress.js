import { ProgressBar, Stage } from './Progress.style';
import { useSelector } from 'react-redux';
import { selectCurrentProgress } from '../detailsCaptureSlice';
export default function Progress(props) {
    const currentProgress = useSelector(selectCurrentProgress);
    return (
      <ProgressBar>
        {[...Array(props.total)].map((value, i) => {
          const stage = i+1;
          return <Stage key={i} active={(stage === currentProgress)}>{stage}</Stage>
        })
        }
      </ProgressBar>
    );
  }