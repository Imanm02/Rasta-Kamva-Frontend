import {
  Grid,
  Paper,
} from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import makeStyles from '@mui/styles/makeStyles';

import EditState from '../../components/SpecialComponents/EditWorkshopPage/EditState';
import StatesTabbar from '../../components/SpecialComponents/EditWorkshopPage/StatesTabbar';
import {
  getAllWorkshopStatesInfoAction,
  getOneStateAction,
} from '../../redux/slices/workshop';
import { State } from '../../types/models';

const useStyles = makeStyles((theme) => ({
  tabbar: {
    overflow: 'hidden',
  },

  workshopTabsPaper: {
    padding: 1,
    background: '#F7F9FC',
    height: '100%',
  },
}));

type EditWorkshopPropsType = {
  getAllWorkshopStatesInfo: Function,
  getOneState: Function,
  currentState: State,
  allStates: State[],
}

const EditWorkshop = ({
  getAllWorkshopStatesInfo,
  getOneState,
  currentState = null,
  allStates = [],
}: EditWorkshopPropsType) => {
  const classes = useStyles();
  const { fsmId } = useParams();
  const [tab, setTab] = React.useState(0);

  useEffect(() => {
    getAllWorkshopStatesInfo({ fsmId });
  }, [])

  useEffect(() => {
    if (allStates[tab]) {
      getOneState({ stateId: allStates[tab].id });
    }
  }, [allStates, tab])

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Paper className={classes.tabbar}>
          <StatesTabbar
            value={tab}
            setValue={setTab}
            tabs={allStates.map((state) => state.name)} 
            fsmId={fsmId}
          />
        </Paper>
        <EditState state={currentState} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: State) => ({
  allStates: state.workshop.allStates,
  currentState: state.workshop.currentState,
});

export default connect(mapStateToProps, {
  getOneState: getOneStateAction,
  getAllWorkshopStatesInfo: getAllWorkshopStatesInfoAction,
})(EditWorkshop);