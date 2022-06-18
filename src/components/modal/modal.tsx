import { Dialog, DialogProps } from '@mui/material';

export interface ModalProps {
  fullScreen?: boolean;
  open: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  fullWidth?: boolean;
  maxWidth?: DialogProps['maxWidth'];
}

export const Modal: React.FC<ModalProps> = ({ fullScreen = false, open, onClose, fullWidth = true, maxWidth = 'md', ...props }) => {
  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={onClose} fullWidth={fullWidth} maxWidth={maxWidth}>
      {props.children}
    </Dialog>
  );
};
