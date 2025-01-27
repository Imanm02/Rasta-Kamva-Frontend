import {
  Button,
  Dialog,
  Divider,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Stack,
} from '@mui/material';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslate } from 'react-redux-multilingual/lib/context';
import UploadFile from '../../molecules/UploadFile';

import {
  createVideoWidgetAction,
  updateVideoWidgetAction,
} from '../../../redux/slices/widget';

function VideoEditWidget({
  updateVideoWidget,
  createVideoWidget,

  paperId,
  open,
  link: oldLink,
  handleClose,
  id: widgetId,
  file: previousFile,
}) {
  const t = useTranslate();
  const [link, setLink] = useState(oldLink);
  const [file, setFile] = useState(null);

  const handleClick = () => {
    let payload = {
      paper: paperId,
    };
    if (file) {
      payload = {
        ...payload,
        file,
      }
    }
    if (link) {
      payload = {
        ...payload,
        link,
      }
    }
    if (widgetId) {
      updateVideoWidget({
        ...payload,
        widgetId,
      })
    } else {
      createVideoWidget(payload);
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>فیلم</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <UploadFile widgetId={widgetId} paperId={paperId} file={file} setFile={setFile} previousFile={previousFile} />
          <Divider>یا</Divider>
          <DialogContentText>{t('uploadFileFillUrl')}</DialogContentText>
          <TextField
            fullWidth
            label="آدرس فیلم"
            value={link}
            inputProps={{ className: 'ltr-input' }}
            placeholder="http://example.com/example.mp4"
            onChange={(e) => setLink(e.target.value)}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick} color="primary" variant="contained">
          {t('submit')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default connect(
  null,
  {
    createVideoWidget: createVideoWidgetAction,
    updateVideoWidget: updateVideoWidgetAction,
  }
)(VideoEditWidget);
