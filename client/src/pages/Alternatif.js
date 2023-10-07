{forum.length > 0 ? (
  forum.map((forums) => {
    const { idForum, nomorInduk, nama, title, komentar, profile } = forums;
    return (
      <div className='forum'>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={nama} src={profile} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {nama}
              </Typography>
              {komentar}
            </React.Fragment>
          }
        />
        <MenuIcon/>
      </ListItem>
      <Divider variant="inset" component="li" />
      </div>
    );
  })
) : (
  <Loading />
)}