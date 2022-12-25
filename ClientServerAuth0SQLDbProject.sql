create table ContactUs(ContactUs_ID int primary key identity,
ContactUs_FirstName nvarchar(max),
ContactUs_LastName nvarchar(max),
ContactUs_Username nvarchar(max),
ContactUs_EmailAddress nvarchar(max),
ContactUs_ContactUsInput nvarchar(max))


declare @FirstName nvarchar (max) = 'www', @LastName nvarchar(max) = 'oooo',
@Username nvarchar(max) = 'www_oooo', @EmailAddress nvarchar(max) = 'www.ez@gmail.com',
@ContactUsInput nvarchar(max) = 'אמן',@ContactUs_ID int

--insert into ContactUs values (@FirstName,@LastName,@Username,@EmailAddress,@ContactUsInput)
insert into ContactUs values (@FirstName,@LastName,@Username,@EmailAddress,@ContactUsInput)

--select * from ContactUs