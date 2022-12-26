import { NextRequest } from 'next/server'

const TOKEN = 'token';

const isRequestValid = async (req) => {
  const cookie = req.cookies.get('token')
	console.log(cookie);
  if (!cookie) {
    return false;
  }else{
    return true
  }
}

export default isRequestValid
