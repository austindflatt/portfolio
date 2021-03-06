import React, { useState, useContext, useEffect } from 'react'
import { TextInput, Table, ScrollArea, Button, Loader } from '@mantine/core';
import { VideoContext } from '../../../context/videoContext/VideoContext';
import { deleteVideo, getVideos } from '../../../context/videoContext/apiCalls';
import { Link } from "react-router-dom";
import { Search } from 'tabler-icons-react';
import { Pagination } from '@mui/material';
import AddVideo from './AddVideo';
import EditVideo from './EditVideo';

const VideoList = () => {
  const { videos, isFetching, dispatch } = useContext(VideoContext);
  const [opened, setOpened] = useState(false);
  const [openedAdd, setOpenedAdd] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [editId, setEditId] = useState('');

  useEffect(() => {
    getVideos(dispatch);
  }, [dispatch]);
  
  const handleDelete = (id) => {
    deleteVideo(id, dispatch);
  }

  const showEdit = (id) => {
    setEditId(id);
    setOpened(true);
  }

  const showAdd = () => {
    setOpenedAdd(true);
  }

  return (
    <>

    <EditVideo
      editId={editId}
      opened={opened}
      setOpened={setOpened}
    />

    <AddVideo
      openedAdd={openedAdd}
      setOpenedAdd={setOpenedAdd}
    />

    <Button type="Submit" variant="light" color="green" size="sm" onClick={() => showAdd()}>Add New Video</Button>

    <TextInput
      size="md"
      variant="unstyled"
      placeholder="Search by title"
      onChange={(e) => setSearch(e.target.value)}
      rightSectionWidth={42}
      style={{ marginTop: '20px', marginBottom: '20px' }}
      icon={<Search size={14} />}
    />
    {isFetching ?
    <Loader variant="dots" size="xl" color="green" style={{ width: '100%', display: 'flex', justifyContent: 'center' }} />
    :
    <>
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm" style={{ justifyContent: 'center' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Added On</th>
            <th>Link</th>
            <th>Video Actions</th>
          </tr>
        </thead>
        <tbody>
        {
        videos
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        .filter((video) => {
          if(search === ''){
            return true
          } else if(video.title.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          return false
        })
        .map((video) => {
          return (
            <tr key={video._id}>
            <td>{video.title}</td>
            <td>{video.createdAt}</td>
            <td><Link to={video.videoLink}>View Video</Link></td>
            <td>
              <Button type="Submit" variant="light" color="orange" size="sm" style={{ marginRight: '10px' }} onClick={() => showEdit(video._id)}>Edit</Button>
              <Button type="Submit" variant="light" color="red" size="sm" onClick={() => handleDelete(video._id)}>Delete</Button>
            </td>
          </tr>
          )
        })
        }
        </tbody>
      </Table>
    </ScrollArea>
    <Pagination
    count={(videos.length / 10).toFixed(0)}
    onChange={(_, value) => {
      setPage(value);
      window.scroll(0, 450);
    }}
    style={{ padding: 20, width: '100%', display: 'flex', justifyContent: 'center' }}
    />
    </>
    }
    </>
  )
}

export default VideoList