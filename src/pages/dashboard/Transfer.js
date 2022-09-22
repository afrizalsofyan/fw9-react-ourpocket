import React from 'react';
import NavbarDashboard from '../../components/NavbarDashboard';
import { Button, Container, Form, InputGroup, Row, Spinner } from 'react-bootstrap';
import SideBarMenu from '../../components/SideBarMenu';
import FooterDashboard from '../../components/FooterDashboard';
import ContentLayout from '../../components/ContentLayout';
import { UserCard } from '../../components/UserCard';
import { FiSearch } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '../../redux/actionAsync/user';
import { useNavigate } from 'react-router-dom';

function Transfer() {
  const navigate = useNavigate();
  const users = useSelector((state)=> state.user.results);
  const token = useSelector((state)=> state.auth.token);
  const profile = useSelector((state)=> state.user.profile);
  const infoData = useSelector(state => state.user.infoData);
  const errorMsg = useSelector(state => state.user.errorMsg);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(5);
  const [keyword, setKeyword] = React.useState('');
  const [sortType, setSortType] = React.useState('0');
  const dispatch = useDispatch();

  const onPrevPage = () => {
    if(infoData?.prevPage != null) {
      setPage(page-1);
    }
  };

  const onNextPage = () => {
    if (infoData?.nextPage != null) {
      setPage(page+1);
    }
  };

  const onSearchRecipient = (e) => {
    setKeyword(e.target.value);
    if(e.target.value === '') {
      setLimit(5);
      setPage(1);
    } else {
      setLimit(5);
      setPage(1);
    }
  };

  const onSortType = (e) => {
    setSortType(e.target.value);
  };
  console.log(keyword);
  React.useEffect(()=>{
    dispatch(getAllUser({keywords: keyword,sortType: sortType, limit: limit, page: page}));
    if(profile.phone_number == null){
      navigate('/home/profile');
    }
  }, [dispatch, token, page, keyword, limit, sortType]);
  return (
    <>
      <NavbarDashboard titlePage='OPo - transfer'/>
      <Container as='section' className='g-0 '>
        <Row className='pt-5 gx-0 gx-md-3'>
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div className='d-flex flex-row justify-content-between'>
                  <span className='fw-bold fs-5 color-text-2'>Search Receiver</span>
                </div>
                <InputGroup className='search-input my-4 '>
                  <span className='icon-input'>
                    <FiSearch size={24}/>
                  </span>
                  <Form.Control type={'text'} className='ps-5 border-0 bg-grey-input rounded-3 py-3 color-text-6' value={keyword} onChange={onSearchRecipient} placeholder='Search receiver here'/>
                </InputGroup>
                {/* img_path={Img1} */}
                <Form.Select className='w-25 shadow-none' onChange={onSortType}>
                  <option>Sort</option>
                  <option value={'0'}>asc</option>
                  <option value={'1'}>desc</option>
                </Form.Select>
                <div className='height-seacrh-layout'>
                  <div className='d-flex flex-column gap-5 justify-content-start h-100 py-4'>
                    {errorMsg == null ? <>
                      {users?.length > 0 ? users.map((el)=>{
                        return(
                          <div key={el.id} >
                            <UserCard
                              url={`/home/transfer/${el.id}`}
                              img_path={el.photo_url}
                              name={el.first_name == null && el.last_name == null ? el.username : `${el.first_name} ${el.last_name}`}
                              phone={el.phone_number}
                            />
                          </div>
                        );}) : <div className='d-flex justify-content-center align-items-center h-100'><Spinner animation='grow' variant='info' /></div>}
                    </> : <div className='d-flex justify-content-center align-items-center h-100'>
                      <span className='color-text-6 fs-4 fw-light'>{errorMsg}</span> </div>}
                  </div>
                </div>
                {/* scondary */}
                <div className='d-flex flex-row justify-content-center align-items-center gap-3'>
                  <Button variant={`${infoData?.prevPage === null ? 'secondary' : 'info'}`} disabled={infoData?.prevPage === null ? true : false} className='text-white' onClick={onPrevPage}>Info</Button>
                  <span className='border-0 border-bottom fw-bold color-text-6'>{infoData?.currentPage}</span>
                  <Button variant={`${infoData?.nextPage === null ? 'secondary' : 'info'}`} disabled={infoData?.nextPage === null ? true : false} className='text-white' onClick={onNextPage}>Info</Button>
                </div> 
              </>
            }
          />
        </Row>
      </Container>
      <FooterDashboard />
    </>
  );
}

export default Transfer;
