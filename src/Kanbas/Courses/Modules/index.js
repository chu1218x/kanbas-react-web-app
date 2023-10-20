import ModuleList from "./ModuleList.js";
import {FaEllipsisVertical} from "react-icons/fa6";


function Modules() {
  return (
    <div>
      <div class="d-flex justify-content-end gap-2">
                    <button class="btn btn-secondary btn-sm no-wrap" type="button">Collapse All</button>
                    <button class="btn btn-secondary btn-sm no-wrap" type="button">View Progress</button>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle Float-end" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Publish All
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Publish All</a></li>
                            <li><a class="dropdown-item" href="#">Publish all items and modules</a></li>
                            <li><a class="dropdown-item" href="#">UnPublish</a></li>
                        </ul>
                    </div>
                    <button class="btn btn-danger btn-sm no-wrap" type="button">+ Module</button>
                    <button class="btn btn-secondary btn-sm no-wrap" type="button">
                        <FaEllipsisVertical/>
                    </button>
                </div>

                <hr />
    
      <ModuleList />
    </div>
  );
}
export default Modules;
