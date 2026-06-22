//method-1 to wrap(promises)

const asyncHandler = (requestHandler) => {
      return (req,res,next) =>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
      }
}


export {asyncHandler}


//method-2(try and catch)
//below is shorthand of a function that returns another function
// const asyncHandler = (func) =>()=>{}

//if the returned function is async function then
//const asyncHandler = (func) => async()=>{}


//since it can be used in a middleware  so we take all three(req,res,next) from function passes(func)
/*
const asyncHandler = (func) => async(req,res,next)=>{
  try {
    await func(req,res,next)
  } catch (error) {
    res.status(error.code || 500).json({
      success:false,
      message:error.message,
    })
  }
} */