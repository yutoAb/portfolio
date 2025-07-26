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
}

export function SimpleDialog(props: SimpleDialogProps) {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>To Do アプリ</DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          ReactとTypeScriptで作成したタスク管理アプリです。App Engine の /tmp
          に保存しているので，一定時間後にToDo データはすべて消えてしまいます。
        </Typography>
        <Typography>
          アプリリンク：
          <a
            href="https://karu-web-taupe.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://karu-web-taupe.vercel.app/
          </a>
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>閉じる</Button>
      </DialogActions>
    </Dialog>
  );
}
