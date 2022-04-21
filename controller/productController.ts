
import { RequestHandler } from "express";
import book from "../Models/book";



 export const getBooks: RequestHandler=  async(req,res)=>{

    try {
        await book.find().then(result=>{
            res.json(result)
        }).catch(err=>{
            console.log({
                
                message: err.message,
                error :err
             })
        })
    } catch (error:any) {
        res.json({error:error.message})
        
    }

}


export const getBook: RequestHandler<{id:string}>=  async(req,res)=>{
    try {
        const id = req.params.id
        await book.findById(id) 
        .then(result=>{
            res.json(result)
        }).catch(err=>{
            console.log({
                
                message: err.message,
                error :err
             })
        })

    } catch (error:any) {
        res.json({error:error.message})
        
    }
}

export const createBook: RequestHandler=  async(req,res)=>{
  try {
    let{bkname,bktitle,bkauthor} = req.body as { bkname:string, bktitle:string, bkauthor:string}
   
    const b= new book({
        name:bkname,
        title:bktitle,
        author:bkauthor
    })
   
    await book.create(b)
   
    res.json({
        message:"Books added "
    }) 
  } catch (error:any) {
    res.json({error:error.message})
  }
   
   }


   export const updateBook:RequestHandler<{id:string}>= async(req,res)=>{
   try {
    const id = req.params.id
    let{bkname,bktitle,bkauthor} = req.body as { bkname:string, bktitle:string, bkauthor:string}
   
        const b={
            name:bkname,
            title:bktitle,
            author:bkauthor
        }

    await book.findByIdAndUpdate(id,b)
    
    res.json({
        message:"Book Updated Successfully"
    })

   } catch (error:any) {
       res.json({error:error.message})
   }

   }


   export const  deleteBook:RequestHandler<{id:string}>= async(req,res)=>{
    
    try {
        const id = req.params.id

        await book.findByIdAndDelete(id)

        res.json({
            message:"Book Successfully Deleted"
        })
    } catch (error:any) {
        res.json({error:error.message})
    }
    
   }