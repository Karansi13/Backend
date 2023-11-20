// Using Promises

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}







// const asyncHandler = () => {}


export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


//HOSKTA HAI CODE BASES ME AISA NA DIKHE EK AUR DUSRA OPTION HOTA HAI BY USING PROMISES
// const asyncHandler = (fn) => async (error , req , res , next) => {
//     try {
//         await fn(req , res , next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }