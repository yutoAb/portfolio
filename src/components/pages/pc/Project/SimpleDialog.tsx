import {
  Typography,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
  Button,
} from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  content: string;
  link: string;
}

export function SimpleDialog(props: SimpleDialogProps) {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>{props.content}</Typography>
        <Typography>
          アプリリンク：
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            {props.link}
          </a>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>閉じる</Button>
      </DialogActions>
    </Dialog>
  );
}
