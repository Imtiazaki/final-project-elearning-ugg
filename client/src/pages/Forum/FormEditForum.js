import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editForum, forumDetails } from "../../axios/ForumAxios";

export default function FormEdit() {

  const [form, setForm] = useState({
    idForum: 666,
    nomorInduk: 1001,
    nama: "Anonymous",
    title: "",
    komentar: "",
    profile: "",
  });

  const navigation = useNavigate();
  const params = useParams();

  const getForumDetails = () => {
    const { id } = params;
    forumDetails(+id, (result) => {
      setForm({
        idForum: result.idForum,
        nomorInduk: result.nomorInduk,
        nama: result.nama,
        title: result.title,
        komentar: result.komentar,
        profile: result.profile,
      });
      console.log(result);
    });
  };

  useEffect(() => {
    getForumDetails();
  }, []);

  const submitHandler = () => {
    editForum(+params.id, form);
    navigation("/forum");
  };
  

  return (
    <Box
      component="form"
      sx={{ maxWidth: "100%", m: 1 }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          id="outlined-multiline-static"
          disabled
          label={form.title}
          defaultValue={form.title}
          sx={{ m: 1 }}
          fullWidth
        />
      </div>
      <div>
        <TextField
          onChange={(e) => setForm({ ...form, komentar: e.target.value })}
          fullWidth
          sx={{ m: 1 }}
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          defaultValue={form.komentar}
          width="100%"
        />
      </div>
      <div>
        <Button
          type="submit"
          fullWidth
          sx={{ m: 1 }}
          variant="outlined"
          onClick={() => submitHandler()}
        >
          Submit
        </Button>
      </div>
    </Box>
  );
}
