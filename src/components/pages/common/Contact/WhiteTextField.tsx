import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

type WhiteTextFieldProps = Omit<
  TextFieldProps,
  "label" | "value" | "onChange"
> & {
  label: string;
  value: string;
  field: string;
  onChange: (field: string, value: string) => void;
};

export const WhiteTextField: React.FC<WhiteTextFieldProps> = ({
  label,
  value,
  field,
  onChange,
  sx,
  required = true,
  variant = "outlined",
  fullWidth = true,
  ...rest
}) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(field, e.target.value)}
      required={required}
      variant={variant}
      fullWidth={fullWidth}
      {...rest}
      sx={[
        {
          // ラベル色
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiInputLabel-root.Mui-focused": { color: "white" },

          // 入力文字色
          "& .MuiInputBase-input": { color: "white" },

          // 枠線色（通常／hover／focus）
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "white",
            },
        },
        sx as any, // 追加の sx があれば後から上書きできる
      ]}
    />
  );
};
