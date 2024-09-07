import * as React from "react";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuTwoToneIcon className="Link"></MenuTwoToneIcon>
      </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="drawer-div">
          <a
            href="/
"
          >
            <p className="Link"> Home</p>
          </a>
          <a href="/compare">
            <p className="Link"> Compare </p>
          </a>
          <a href="/watch List">
            <p className="Link">WatchList</p>
          </a>
          <a href="/Dashboard">
            <p className="Link">Dashboard</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
