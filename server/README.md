# School Menagement 
### MERN Fullstack Project by Aviv Elany

# צד שרת


### before starting!
change name to ".env" file!

## משתמשים:
|ststus| No. | URL | Method | Authorization | action | return |
|------| ------ | ------ | ------ | ------ | ------ | ------ |
|[V]| 1 | /users/register | POST | principal | register new user  | user |
|[V]| 2 | /users/login | POST | all | login user  | token |
|[V]| 3 | /users | GET | principal + teacher | get all users  | users |
|[V]| 4 | /users : id | GET | principal + teacher + own user | get user by id  | user |
|[X-V]| 5 | /users : classroom | GET | principal + teacher + own classroom user | get all student in classroom  | student in classroom |
|[V]| 6 | /users : id | PUT | principal + own user | edit user by id  | user|
|[V]| 7 | /users : id | PATCH | principal + teacher | update grades  | user |
|[V]| 8 | /users : id | DELETE | principal | delete user  | deleted: user|

### דקויות:
* [זהו אתר בית ספר ולכן רק למנהל הרשאה לרישום מורה ו/או תלמיד למערכת]
* [עריכת פרטי המשתמש קיימת ללא שינוי מייל התחברות - החלטה אדמיניסטרטיבית של המנהל]
* תלמיד יוכל לצפות ברשימת כל חבריו לכיתה - דף קשר עם פרטי קשר
* דף משתמש - יכולים לצפות המנהל, המחנך והתלמיד עצמו

### נתיבים
הצגת כל המשתמשים:
```sh
http://127.0.0.1:3000/users/
```
רישום:
```sh
http://127.0.0.1:3000/users/register
```
התחברות:
```sh
http://127.0.0.1:3000/users/login
```
משתמש: הצגה, שינוי, עדכון, מחיקה
```sh
http://127.0.0.1:3000/users/{id}
```
הכנסה לארכיון (אדמיניסטרטיבית-אלטרנטיבה למחיקה):
```sh
http://127.0.0.1:3000/users/archive/{id}
```
הצגת כל הכיתה:
```sh
http://127.0.0.1:3000/users/{classroom}
```
<HR>


## חדשות ועדכונים:
|status| No. | URL | Method | Authorization | action | return |
|------| ------ | ------ | ------ | ------ | ------ | ------ |
|[V]| 1 | /news | POST | principal | create new news  | user |
|[V]| 2 | /news | GET | all | get all news  | news |
|[V]| 3 | /news : id | GET | all | get news by id  | news |
|[V]| 4 | /news : id | PUT | principal | edit news by id  | news|
|[V]| 5 | /news : id | PATCH | principal | isDeleted change  | archived: news |
|[V]| 6 | /news : id | DELETE | principal | delete user  | deleted: news|

### דקויות:
* כל סמכויות הטיפול אצל המנהל, כל השאר רק צופים
* יכול לצפות בחדשות ועדכונים כולם - מחובר ולא מחובר
* היכולת של מפתח ממאגר נתונים אחד (users) לשלוט בהרשאה לטפל במאגר נתונים שני (news)
* אופציה: להוסיף כפתור לייק שישמור id כל חדשות וישמור במערך אצלך היוזר ויציג לו בעמוד אישי


### נתיבים
הצגת כל החדשות, יצירת כתבה חדשה:
```sh
http://127.0.0.1:3000/news/
```
כתבה: הצגה, שינוי, עדכון, מחיקה**
```sh
http://127.0.0.1:3000/news/{id}
```
** הרשאה מוגבלת רק למנהלת

<HR>

## צור קשר
|status| No. | URL | Method | Authorization | action | return |
|------| ------ | ------ | ------ | ------ | ------ | ------ |
|[V]| 1 | /contact | POST | all | create new news  | message |
|[V]| 2 | /contact | GET | principal | get all contacts  | contact |
|[V]| 3 | /contact : id | GET | principal | get contact by id  | contact |
|[V]| 4 | /contact : id | PATCH | principal | isDeleted change  | archived: contact |
|[V]| 5 | /contact : id | DELETE | principal | delete user  | deleted: contact|

### דקויות:
* כל סמכויות הטיפול אצל המנהל
* יכולים לשלוח הודעה כולם - מחובר ולא מחובר
* משתמש רשום שישלח הודעה פרטיו ימולאו לבד, משתמש לא מחובר יזין ידנית

### נתיבים
יצירת הודעה חדשה והצגת כל ההודעות** :
```sh
http://127.0.0.1:3000/contact/
```
כתבה: הצגה, שינוי, עדכון, מחיקה**
```sh
http://127.0.0.1:3000/contact/{id}
```
** הרשאה מוגבלת רק למנהלת

<HR>

## סגל אקדמי
|status| No. | URL | Method | Authorization | action | return |
|------| ------ | ------ | ------ | ------ | ------ | ------ |
|[V]| 1 | /staff | POST | principal | create new staff  | message |
|[V]| 2 | /staff | GET | all | get all staff  | staff |
|[V]| 3 | /staff : id | GET | principal | get staff by id  | staff |
|[V]| 4 | /staff : id | PATCH | principal | isDeleted change  | archived: staff |
|[V]| 5 | /staff : id | DELETE | principal | delete staff  | deleted: staff|

### דקויות:
* כל סמכויות הטיפול אצל המנהל
* כיוון שרשימת המשתמשים נעולה ובסמכות מורה ומנהל, סגל אקדמי יצא לנתיב משלו

### נתיבים
יצירת הודעה חדשה והצגת כל ההודעות** :
```sh
http://127.0.0.1:3000/staff/
```
כתבה: הצגה, שינוי, עדכון, מחיקה**
```sh
http://127.0.0.1:3000/staff/{id}
```
** הרשאה מוגבלת רק למנהלת

<HR>
<BR>
<BR>

## טיפול בהרשאות
ישנן שלוש פונקציות המטפלות בהרשאות בצד השרת - "mustLogin", "allowedRoles", "allowedclassroom".
- mustLogin - חייב להיות משתמש רשום במערכת כדי לגשת למידע
- allowedRoles - חייב להיות בעל הרשאה כדי לגשת למידע
- allowedclassroom - חייב להיות בעל הרשאה כדי לגשת למידע






