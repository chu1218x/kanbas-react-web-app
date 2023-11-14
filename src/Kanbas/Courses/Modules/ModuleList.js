import React , { useState, useEffect }from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse,createModule} from "./client";
import * as client from "./client.js";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  
  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);



  return (
    <ul className="list-group">
       <li className="list-group-item">
      
        <div className="input-group">
            <input className="course-input " value={module.name}
                onChange={(e) => 
                    dispatch(setModule({ ...module, name: e.target.value }))
                }/>
            <textarea  value={module.description}
                onChange={(e) => 
                    dispatch(setModule({ ...module, description: e.target.value }))
                }/>
        </div>

        <button type="button" class="btn btn-success float-end"
          onClick={handleAddModule}>
          Add</button>
          <button type="button" class="btn btn-primary float-end"
          onClick={handleUpdateModule}>
          Update
        </button>
      </li>


      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
            <button type="button" class="btn btn-success float-end"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

             <button type="button" class="btn btn-danger float-end"
              onClick={() => handleDeleteModule(module._id)}
              >
              Delete
            </button>

             <h3>{module.name}</h3>
             <p>{module.description}</p>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;