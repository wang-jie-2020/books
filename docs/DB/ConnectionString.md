# Net

## LocalDB连接字符串示例

```XML
<add name="ConnectionStringName"
    providerName="System.Data.SqlClient"
    connectionString="Data Source=(LocalDB)\v11.0;AttachDbFileName=|DataDirectory|\DatabaseFileName.mdf;InitialCatalog=DatabaseName;Integrated Security=True;MultipleActiveResultSets=True" />
```

## SQL Server Express连接字符串示例

```XML
<add name="ConnectionStringName"
    providerName="System.Data.SqlClient"
    connectionString="Data Source=.\SQLEXPRESS;Initial Catalog=DatabaseName;Integrated Security=True;MultipleActiveResultSets=True"/>
```

下面的示例适用于App_Data文件夹中.mdf文件中的SQL Server Express数据库。

```XML
<add name="ConnectionStringName"
    providerName="System.Data.SqlClient"
    connectionString="Data Source=.\SQLEXPRESS;AttachDbFileName=|DataDirectory|\DatabaseFileName.mdf;Integrated Security=True;User Instance=True;MultipleActiveResultSets=True" />
```

## SQL Server（完整版）连接字符串示例

```XML
<add name="ConnectionStringName"
    providerName="System.Data.SqlClient"
    connectionString="Data Source=ServerName;Initial Catalog=DatabaseName;Integrated Security=False;User Id=userid;Password=password;MultipleActiveResultSets=True" />
```

以下示例适用于使用集成安全性的SQL Server数据库（使用Windows用户帐户的凭据登录到服务器）。该示例指定SQL Server的命名实例。

```XML
<add name="ConnectionStringName"
    providerName="System.Data.SqlClient"
    connectionString="Data Source=ServerName\InstanceName;Initial Catalog=DatabaseName;Integrated Security=True;MultipleActiveResultSets=True" />
```

## 集成安全性（同义词：Trusted_Connection）

此设置指定连接应使用连接字符串中的用户ID和密码登录到SQL Server实例，还是应使用当前Windows帐户凭据进行身份验证：

- True表示即使连接字符串包含用户ID和密码设置，也要使用Windows集成安全性登录SQL Server。
- False表示使用SQL Server安全性通过使用连接字符串中的User ID和Password值登录，如果不存在则引发异常。
- SSPI（安全支持提供程序接口）意味着如果没有用户ID和密码，则使用Windows安全；如果存在用户ID和密码，则使用SQL Server安全。

使用LocalDB或AttachDBFileName选项时，必须使用集成安全性。

## 实践

### AttachDbFileName

在示例中的`|DataDirectory|`在Web项目中默认是app_data文件夹，在控制台或者单机项目中是不存在的，可以自己增加到域的环境中。

```C#
#region 手动增加DataDirectory，方便附加数据库文件

string baseDir = AppDomain.CurrentDomain.BaseDirectory.TrimEnd('\\');
string dataDir = baseDir.Substring(0, baseDir.LastIndexOf('\\') + 1) + "data\\";
if (!Directory.Exists(dataDir))
Directory.CreateDirectory(dataDir);

AppDomain.CurrentDomain.SetData("DataDirectory", dataDir);

#endregion
```

# Net Core

## 连接字符串示例

```json
  "ConnectionStrings": {
    "RazorPagesMovieContext": 
      "Server=(localdb)\\mssqllocaldb;Database=RazorPagesMovieContext-		bc;Trusted_Connection=True;MultipleActiveResultSets=true"}
```

与Net差别不大，以下是一些尝试：

- `Server` 与 `Data Source`	都可以

- `Database` 与 `Initial Catalog`   都可以

- `AttachDbFilename`

  在Net中，一般以AttachDbFilename=|DataDirectory|\xxx.mdf指向当前目录的app_data文件夹

  在NetCore中，没有这个文件夹，但AttachDbFilename=xxx.mdf即默认指向当前的内容根了

  但实际操作，数据库被创建，但表为空，报出了错误。从文档看，这个只在Core 1.0支持。