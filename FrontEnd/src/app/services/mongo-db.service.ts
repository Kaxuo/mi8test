import { Injectable } from '@angular/core'; 
import { WebrequestService } from './webresquest.service'

@Injectable({
  providedIn: 'root'
})
export class MongoDBService {

  constructor(private webrequest : WebrequestService) { }

  getData(){
    return this.webrequest.get('api/info')
  }
  getSingleData(id){
    return this.webrequest.getOne(`api/info/${id}`)
  }

  postData(data){
    return this.webrequest.post('api/info', data)
  }

  editData(id, data){
    return this.webrequest.put(`api/info/${id}`, data)
  }

  deleteData(id){
    return this.webrequest.delete(`api/info/${id}`)
  }
}
