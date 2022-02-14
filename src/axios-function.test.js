const axios = require('axios')
jest.mock('axios');

  
describe("mock api calls", () => {
   test("mocking external endpoint in axios", () => {
       
      
       const mockedResponse = {data: {resignId:'1002', empId:'2',requestDate:'2021-09-09',resignDate:'2021-12-12',resignationDescription:'work-load',resignationStatus:''}}
       axios.get.mockResolvedValue(mockedResponse)
       
       const GetResignationDetails = require('./axios-function.js')
  
    
      GetResignationDetails()
  
       // asserts
       expect(axios.get).toHaveBeenCalled()
       expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/cg/resignation/1002')
  
   })
})

