# 3. Chuyển chuỗi thành URL

## Mô tả

<p>Viết một phương thức thay thế tất cả khoảng trống trong chuỗi với &#39;%20&#39;. Bạn có thể giả định rằng chuỗi có đủ khoảng trống ở cuối để chứa các ký tự bổ sung và bạn được cung cấp độ dài "thực" của chuỗi. (Lưu ý: Nếu triển khai bằng Java, vui lòng sử dụng mảng ký tự để bạn có thể thực hiện thao tác này tại chỗ.)</p>

<p><strong>Ví dụ 1:</strong></p>

<pre>

<strong>Input: </strong>&quot;Mr John Smith &quot;, 13

<strong>Output: </strong>&quot;Mr%20John%20Smith&quot;

</pre>

<p><strong>Ví dụ 2:</strong></p>

<pre>

<strong>Input: </strong>&quot;               &quot;, 5

<strong>Output: </strong>&quot;%20%20%20%20%20&quot;

</pre>

<p>&nbsp;</p>

<p><strong>Lưu ý:</strong></p>

<ol>
	<li><code>0 &lt;= S.length &lt;= 500000</code></li>
</ol>
