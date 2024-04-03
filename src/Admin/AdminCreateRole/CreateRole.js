import React from 'react';
import './CreateRole.css';
import accentureLogo from '../../Assets/Accenture_Logo.png'; // Importing accenture logo
import logoImage from '../../Assets/logo.jpg';
import { Link } from 'react-router-dom';


const CreateRole = () => {
    return (
        <div className='create-role'>
            {/* Adding accenture logo to the top left corner */}
            <Link to='/adminlogin'><img src={accentureLogo} alt='Accenture Logo' className='top-right-logo'></img></Link>
            {/* Adding abc logo to the top right corner */}
            <Link to='/'><img src={logoImage} alt='Mygenie Logo' className='top-left-logo'></img></Link>
            <h2>Create New Role</h2>
            <form className='role-form'>
                <div className='form-group'>
                    <label htmlFor='taskName'>Task Name:</label>
                    <input type='text' id='taskName' name='taskName' />
                </div>
                <div className='form-group'>
                    <label htmlFor='taskDescription'>Task Description:</label>
                    <textarea id='taskDescription' name='taskDescription'></textarea>
                </div>
                <div className='form-group'>
                    <label htmlFor='dataSource'>Data Source:</label>
                    <div class="dropdown">
                    <span class='dropdownHeading'>Choose Data Sources</span>
                    <div class="dropdown-content">
                        <div>
                        <input type="checkbox" id="item1" name="item1" value="Item 1" />
                        <label for="item1">Research and Development</label>
                        </div>
                        <div>
                        <input type="checkbox" id="item2" name="item2" value="Item 2" />
                        <label for="item2">Quality Control	</label>
                        </div>
                        <div>
                        <input type="checkbox" id="item3" name="item3" value="Item 3" />
                        <label for="item3">Supply Chain</label>
                        </div>
                        <div>
                        <input type="checkbox" id="item4" name="item4" value="Item 4" />
                        <label for="item4">Portfolio</label>
                        </div>
                        <div>
                        <input type="checkbox" id="item5" name="item5" value="Item 5" />
                        <label for="item5">Marketing</label>
                        </div>
                        <div>
                        <input type="checkbox" id="item5" name="item5" value="Item 5" />
                        <label for="item5">Regulatory Compliances</label>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='roleName'>Role Name:</label>
                    <input type='text' id='roleName' name='roleName' />
                </div>
                <div className='form-group'>
                    <label htmlFor='roleDescription'>Role Description:</label>
                    <textarea id='roleDescription' name='roleDescription'></textarea>
                </div>
                <div className='form-group'>
                    <label htmlFor='prompt'>Prompt:</label>
                    <input type='text' id='prompt' name='prompt' />
                </div>
                <Link to='/adminroles2'><button type='submit'>Submit</button></Link>
            </form>
        </div>
    );
};

export default CreateRole;
