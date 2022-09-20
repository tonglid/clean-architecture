import styled from "@emotion/styled";
import { List } from "@mui/material";

export const MyList = styled(List)(
  ({theme}) => ({
    '& .MuiListItem-root': {
      paddingTop: '15px'
    },
    '& .MuiDivider-root': {
      marginTop: '5px'
    }
  })
)