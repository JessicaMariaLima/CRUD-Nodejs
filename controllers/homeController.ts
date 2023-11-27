import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
       let user = await User.findAll();
    // let list = Product.getAll();
    // let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        user
        
    });
}


export const novoUsuario = async (req: Request, res: Response) =>{

    let name = req.body.name;
    let age = parseInt(req.body.age)


      // 1 - Build+ save
    const user = User.build({
        name,
        age
    })
 
    await user.save()


    res.redirect('/')

}
