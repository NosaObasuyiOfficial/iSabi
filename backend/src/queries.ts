
//CREATE USER AND LOGIN
export const getusers = "SELECT * FROM userdata";

export const getusersByEmail = "SELECT * FROM userdata WHERE email = $1";

export const getusersByUsername = "SELECT * FROM userdata WHERE username = $1";

export const createusers = "INSERT INTO userdata (firstname, lastname, username, email, phone_number, password) VALUES ($1, $2, $3, $4, $5, $6)";

//USER PROFILE

export const getuserprofile = "SELECT username, skill, city, state, description FROM usersdatabase";

export const postprofile = "INSERT INTO usersdatabase (username, email, phone_number, firstname, lastname, gender, skill, city, state, country, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)";

export const getusersBylastname = "SELECT username, skill, city, state, description FROM usersdatabase WHERE last_name = $1";

export const getprofileBySkill = "SELECT username, skill, city, state, description FROM usersdatabase WHERE skill = $1";

export const artisansbyState_City_Skill = "SELECT username, skill, city, state, description FROM usersdatabase WHERE skill = $1 AND city = $2 AND state = $3"

export const getskillByPainters = "SELECT username, skill, city, state, description FROM usersdatabase WHERE skill = $1"

export const getskillByCleaners = "SELECT username, skill, city, state, description FROM usersdatabase WHERE skill = $1"

export const getskillByGuardners = "SELECT username, skill, city, state, description FROM usersdatabase WHERE skill = $1"

export const getskillsByEmail = "SELECT email FROM usersdatabase WHERE email = $1"

export const updatebyusername = "UPDATE usersdatabase SET username = $1 WHERE email = $2"
export const getbyusername = "SELECT username FROM usersdatabase WHERE username = $1"

export const updatebyphoneNumber = "UPDATE usersdatabase SET phone_number = $1 WHERE email = $2"
export const getbyphoneNumber = "SELECT phone_number FROM usersdatabase WHERE phone_number = $1"

export const updatebyfirstname = "UPDATE usersdatabase SET firstname = $1 WHERE email = $2"

export const updatebylastname = "UPDATE usersdatabase SET lastname = $1 WHERE email = $2"

export const updatebygender = "UPDATE usersdatabase SET gender = $1 WHERE email = $2"

export const updatebyskill = "UPDATE usersdatabase SET skill = $1 WHERE email = $2"

export const updatebycity = "UPDATE usersdatabase SET city = $1 WHERE email = $2"

export const updatebyestate = "UPDATE usersdatabase SET state = $1 WHERE email = $2"

export const updatebycountry = "UPDATE usersdatabase SET country = $1 WHERE email = $2"

export const updatebydescription = "UPDATE usersdatabase SET description = $1 WHERE email = $2"

export const deleteUserProfile = "DELETE FROM usersdatabase WHERE email = $1"
























